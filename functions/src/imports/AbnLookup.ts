import * as functions from 'firebase-functions';
import * as ErrorReporting from '@google-cloud/error-reporting';
import axios from 'axios';
// @ts-ignore
import * as cheerio from 'cheerio';
const slack = require('@slack/client');

const abnLookup = async () => {
	return {
		functions: functions !== null,
		ErrorReporting: ErrorReporting !== null,
		axios: axios !== null,
		cheerio: cheerio !== null,
		slack: slack !== null
	}
};

export default abnLookup;
