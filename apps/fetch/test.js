import 'whatwg-fetch'
import 'es6-promise'

export function getTestData(){
  //获取接口数据
  var promise = fetch('/api/1',{
    //说明:
    // 'include'表示跨域请求是可以带cookie（fetch 跨域请求时默认不会带 cookie，
    // 需要时得手动指定 credentials: 'include'。这和 XHR 的 withCredentials 一样），
    // headers可以设置 http 请求的头部信息。
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*'
    }
  })

  return promise
}

export function postTestDate(){
  var result = fetch('/api/post', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: "a=100&b=200"
  })
}

export function testMock(){
  //获取接口数据
  var promise = fetch('http://xcyn.github.io/production/mock/goods.json',{
    //说明:
    // 'include'表示跨域请求是可以带cookie（fetch 跨域请求时默认不会带 cookie，
    // 需要时得手动指定 credentials: 'include'。这和 XHR 的 withCredentials 一样），
    // headers可以设置 http 请求的头部信息。
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      "Access-Control-Allow-Origin":"*"
    }
  })

  return promise
}