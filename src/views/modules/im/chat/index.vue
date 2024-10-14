<template>
  <div id="main" style="width: 200px;height:80px;"></div>
  一、建立链接<br/>
  <input id="fromUser" type="text" value="592224971695198208"/><a>谁发的，发送者的标识，数字字母,中文不行</a><br/>
  <button @click="connect()">建立WebSocket连接</button>
  <br/>
  二、发消息<br/>
  <input id="toUser" type="text" value="579068904958201856"/><a>发给谁的，接受者的标识，数字字母,中文不行</a><br/>
  <input id="text" type="text"/><a>消息内容</a><br/>
  <button @click="send()">发送消息</button>
  <hr/>
  三、断开链接<br/>
  <button @click
              ="closeWebSocket()">关闭WebSocket连接
  </button>
  <hr/>
  <div id="message"></div>
</template>

<script setup>
import {onMounted, onUnmounted} from 'vue'

var websocket = null;

//将消息显示在网页上
function setMessageInnerHTML(innerHTML) {
  document.getElementById('message').innerHTML += innerHTML + '<br/>';
}

//关闭WebSocket连接
const closeWebSocket = () => {
  websocket.close();
}

//发送消息
const send = () => {
  var message = document.getElementById('text').value;
  var formUser = document.getElementById('fromUser').value;
  var toUser = document.getElementById('toUser').value;
  var timestamp = Date.parse(new Date());
  websocket.send('{"type":"singleChat","data":{"fromId":"' + formUser + '","toId":"' + toUser + '","content":"' + message + '","msgType":"' + 'text' + '","message":"' + '-1' + '","stamp":"' + timestamp + '"}}');
  setMessageInnerHTML("发送消息" + message + "&#13;");
}

const connect = () => {
  //判断当前浏览器是否支持WebSocket
  if ('WebSocket' in window) {
    //改成你的地址
    var fromUser = document.getElementById('fromUser').value;
    websocket = new WebSocket("ws://192.168.2.102:8089/websocket/" + fromUser);

    //连接发生错误的回调方法
    websocket.onerror = function () {
      setMessageInnerHTML("WebSocket连接发生错误 websocket.onerror");
    };

    // 连接成功建立的回调方法
    websocket.onopen = function () {
      setMessageInnerHTML("WebSocket连接成功 websocket.onopen");
    }
    //接收到消息的回调方法
    websocket.onmessage = function (event) {
      console.log(event);
      let data = JSON.parse(event.data);
      if (data.type === 'singleChat') {
        if (data.data.msgType === "image") {
          setMessageInnerHTML("接收图片消息:" + import.meta.env.VITE_IMAGE_BASE_API + data.data.content);
        } else {
          setMessageInnerHTML("接收消息:" + data.data.content);
        }
      }
    }

    //连接关闭的回调方法
    websocket.onclose = function () {
      setMessageInnerHTML("WebSocket连接关闭 websocket.onclose");
    }

    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function () {
      closeWebSocket();
    }
  } else {
    alert('当前浏览器 Not support websocket')
  }
}
onMounted(() => {
})

onUnmounted(() => {
  closeWebSocket();
})
</script>
