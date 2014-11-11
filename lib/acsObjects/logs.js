var acsObject = {
	Logs: {
		methods: {
			queryPushLogDetails: {
				httpMethod: 'GET',
				restMethod: 'querypushlogdetails',
				requiredParam: [{
					key: 'where',
					type: 'string'
				}],
				optionalParam: []
			},
			queryPushLogs: {
				httpMethod: 'GET',
				restMethod: 'querypushlogs',
				requiredParam: [],
				optionalParam: []
			}
		}
	}
};

module.exports = acsObject;