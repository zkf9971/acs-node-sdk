var acsObject = {
	Likes: {
		fields: [{
			key: 'created_at',
			type: 'date'
		}, {
			key: 'id',
			type: 'string'
		}, {
			key: 'likeable_id',
			type: 'string'
		}, {
			key: 'likeable_type',
			type: 'string'
		}, {
			key: 'updated_at',
			type: 'object'
		}, {
			key: 'user',
			type: 'object'
		}],
		methods: {
			create: {
				httpMethod: 'POST',
				requiredParam: [],
				optionalParam: [{
					key: 'post_id',
					type: 'string'
				}, {
					key: 'photo_id',
					type: 'string'
				}, {
					key: 'user_id',
					type: 'string'
				}, {
					key: 'user_id',
					type: 'string'
				}, {
					key: 'event_id',
					type: 'string'
				}, {
					key: 'place_id',
					type: 'string'
				}, {
					key: 'checkin_id',
					type: 'string'
				}, {
					key: 'status_id',
					type: 'string'
				}, {
					key: 'review_id',
					type: 'string'
				}, {
					key: 'custom_object_id',
					type: 'string'
				}, {
					key: 'pretty_json',
					type: 'boolean'
				}]
			},
			delete: {
				httpMethod: 'DELETE',
				requiredParam: [],
				optionalParam: [{
					key: 'post_id',
					type: 'string'
				}, {
					key: 'photo_id',
					type: 'string'
				}, {
					key: 'user_id',
					type: 'string'
				}, {
					key: 'user_id',
					type: 'string'
				}, {
					key: 'event_id',
					type: 'string'
				}, {
					key: 'place_id',
					type: 'string'
				}, {
					key: 'checkin_id',
					type: 'string'
				}, {
					key: 'status_id',
					type: 'string'
				}, {
					key: 'review_id',
					type: 'string'
				}, {
					key: 'custom_object_id',
					type: 'string'
				}, {
					key: 'pretty_json',
					type: 'boolean'
				}]
			},
			query: {
				httpMethod: 'GET',
				requiredParam: [],
				optionalParam: [{
					key: 'post_id',
					type: 'string'
				}, {
					key: 'photo_id',
					type: 'string'
				}, {
					key: 'user_id',
					type: 'string'
				}, {
					key: 'event_id',
					type: 'string'
				}, {
					key: 'place_id',
					type: 'string'
				}, {
					key: 'checkin_id',
					type: 'string'
				}, {
					key: 'status_id',
					type: 'string'
				}, {
					key: 'review_id',
					type: 'string'
				}, {
					key: 'custom_object_id',
					type: 'string'
				}, {
					key: 'user_object_id',
					type: 'string'
				}, {
					key: 'pretty_json',
					type: 'boolean'
				}, {
					key: 'page',
					type: 'number'
				}, {
					key: 'per_page',
					type: 'number'
				}, {
					key: 'limit',
					type: 'number'
				}, {
					key: 'skip',
					type: 'number'
				}, {
					key: 'where',
					type: 'object'
				}, {
					key: 'order',
					type: 'string'
				}, {
					key: 'sel',
					type: 'string'
				}, {
					key: 'unsel',
					type: 'string'
				}, {
					key: 'response_json_depth',
					type: 'number'
				}, {
					key: 'pretty_json',
					type: 'boolean'
				}, {
					key: 'likeable_type',
					type: 'string'
				}, {
					key: 'likeable_id',
					type: 'string'
				}, {
					key: 'created_at',
					type: 'date'
				}, {
					key: 'updated_at',
					type: 'date'
				}]
			}
		}
	}
};

module.exports = acsObject;