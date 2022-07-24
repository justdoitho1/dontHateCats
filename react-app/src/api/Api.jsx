// const ajax_get = (url, callback) => {
//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.onreadystatechange = function () {
//     if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
//       console.log("responseText:" + xmlhttp.responseText);
//       try {
//         var data = JSON.parse(xmlhttp.responseText);
//       } catch (err) {
//         console.log(err.message + " in " + xmlhttp.responseText);
//         return;
//       }
//       return data;
//     }
//   };

//   xmlhttp.open("GET", url, true);
//   xmlhttp.setRequestHeader("x-api-key", "643ecfef-0f68-4f4e-bb57-0796da8793d8");
//   xmlhttp.send();
// };

// export { ajax_get };
