(function() {
  var size = 52
  var columns = 16
  var pageWidth = size*columns

  $('#page').width(pageWidth)
  /*
  $('#page').prepend(
    '<div style="background: red; width: 52px; height: 52px;"></div>'+
    '<div style="background: green; width: 52px; height: 52px;"></div>'+
    '<div style="background: blue; width: 52px; height: 52px;"></div>'+
    '<div style="background: white; width: 52px; height: 52px;"></div>'
  )
  */

  var configure = function() {
    console.log('configure')
    var rows = Math.ceil(model.strategicIcons().length/columns)
    engine.call('handle_icon_list', _.take(model.strategicIcons(), rows), pageWidth)
  }
  var baseSendIconList = model.sendIconList
  model.sendIconList = function() {
    baseSendIconList()
    setTimeout(configure,1000)
  }
})()
