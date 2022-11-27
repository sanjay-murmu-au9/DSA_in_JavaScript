const tripModel = require('./')
const InvoiceMasterModel = require("../")

try {
    let from = moment(req.query.from, 'YYYY-MM-DD').set({
        h: 0,
        m: 0,
        s: 0,
        millisecond: 0
    }).toDate(); // from date;

    let to = moment(req.query.to, 'YYYY-MM-DD').set({
        h: 23,
        m: 59,
        s: 0,
        millisecond: 0
    }).toDate(); // to date;

    let verificationReport = await InvoiceMasterModel.aggregate([
        {
            $match: {
                isDelivered: 1,
                so_deliveryDate: {
                    $gte: from,
                    $lte: to
                }
            }
        },
        {
            $lookup: {
                from: "salesorders",
                localField: "so_db_id",
                foreignField: "_id",
                as: "resultData"
            }
        },
        {
            $unwind: "$resultData"
        },
        {
            $project: {
                _id: 0,
                deliveryDate: { $dateToString: { format: "%d-%m-%Y", date: "$so_delieveryDate", timezone: "+5:30" } },
                InvoiceNo: "$invoiceDetails.invoiceNo",
                OrderedAmount: { $ifNull: ["$resultData.totalAmount", 0] },
                DisputeTotalAmount: { $sum: ['$itemSupplied.disputeAmount'] },
                TotalNetAmount: { $ifNull: ['$totalNetValue', 0] },
                so_db_id: "$so_db_id",
                Remarks: { $ifNull: [{ $concatArrays: "$itemSupplied.itemRemarks" }, 'No remarks found'] },
                ReturnAmount: { $sum: ["$itemSupplied.disputeAmount"] },
                OtpVerified: {
                    $cond: [{ $eg: ["$collectionOTPVerified", 1] }, "Yes", 'No']
                }

            }
        }
    ])

    for (let i = 0; i < verificationReport.length; i++) {
        let tripData = await tripModel.findOne({ "salesOrder": { $in: verificationReport[i]['so_db_id'] } }).lean();
        let deliveryExecData = tripData['deliveryExecutiveName'].split('-')
        verificationReport[i]['DE In'] = deliveryExecData[0];
        verificationReport[i]['DE Name'] = deliveryExecData[1];
        verificationReport[i]['DE contact'] = deliveryExecData[2];
        verificationReport[i]['deliveryedAmount'] = parseInt(verificationReport[i]['TotalNetAmount']) - parseInt(verificationReport[i]['DisputeTotalAmount']);
        verificationReport[i]['Remarks'] = _.toString(verificationReport[i]['Remarks']);
        // to delete an wanted data;
        delete verificationReport[i]['so_db_id'];
        delete verificationReport[i]['DisputeTotalAmount'];
        delete verificationReport[i]['TotalNetAmount'];
    }

} catch (error) {

}
