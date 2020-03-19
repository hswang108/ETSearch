const { client, index, type } = require('./connection')
let date = require('date-and-time');
let now = new Date(); //今天日期
now = date.format(now, 'YYYY-MM-DD'); // 轉換格式=> '2019-02-08'
now = "2019-02-18" //Temp date
module.exports = {
    /** Query ES index for the provided date */
    // 每次返回40筆資料
    queryTerm(term, offset = 0) {
        const body = {
            from: offset,
            size: 40,
            query: {
                "multi_match": {
                    "query": term,
                    "fields": ["title", "content"],

                }

            }
            // highlight: { fields: { text: {} } }
        }
        return client.search({ index, type, body })
    }

}