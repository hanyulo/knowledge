## REST_API FLAW

* 參數、回傳值型別不固定
  * graphql 有固定型別
  * 必須通過graphql validation
* 多版本時，前後端常不匹配
  * graphql 前後端共用schema
* 會拿多餘的欄位
  * graphql 清楚條列要拿的欄位
* 不容易處理巢狀資源
  * details
    * put user into post
    * graphql
      * 指定巢狀資料
* 會不斷成長的 Endpoint 數量
  * graphql 只有一個end point
