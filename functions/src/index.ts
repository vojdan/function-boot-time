import * as functions from 'firebase-functions';

// export const empty = functions.https.onRequest((request, response) => {
// 	functions.logger.info("Hello logs!", {structuredData: true});
// 	response.set('Cache-Control', 'no-cache, no-store, must-revalidate');
// 	response.send("Hello from Firebase!");
// });
//
// export const importOnly = functions.https.onRequest(async (request, response) => {
// 	functions.logger.info("abn start");
// 	// @ts-ignore
// 	const result = await (await import('./imports/AbnLookup')).default(request);
// 	// return FnResponses.sendHttpResponseJson(response, result) as any;
//
// 	functions.logger.info("abn end");
// 	response.set('Cache-Control', 'no-cache, no-store, must-revalidate');
// 	response.send(result);
// });

export const importOnlyOld = functions.https.onRequest(async (request, response) => {
	functions.logger.info("abn start");
	// @ts-ignore
	const result = await (await import('./imports/AbnLookup')).default(request);
	// return FnResponses.sendHttpResponseJson(response, result) as any;

	functions.logger.info("abn end");
	response.set('Cache-Control', 'no-cache, no-store, must-revalidate');
	response.send(result);
});
