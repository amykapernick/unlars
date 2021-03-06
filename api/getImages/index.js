module.exports = async function (context, req) {
    const {BlobServiceClient, StorageSharedKeyCredential} = require('@azure/storage-blob'),
    account = process.env.ACCOUNT_NAME,
    accountKey = process.env.ACCOUNT_KEY,
    sharedKeyCredential = new StorageSharedKeyCredential(account, accountKey),
    blobUrl = `https://${account}.blob.core.windows.net`
    blobServiceClient = new BlobServiceClient(blobUrl, sharedKeyCredential)

    const container = blobServiceClient.getContainerClient("images");

    // context.log(blobServiceClient.listContainers())

    // const containerClient = blobServiceClient.getContainerClient('images');

    // context.log('\nListing blobs...');

    // // List the blob(s) in the container.
    // for await (const blob of containerClient.listBlobsFlat()) {
    //     context.log('\t', blob.name);
    // }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            container
        },
    };
}