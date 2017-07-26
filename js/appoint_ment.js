(function(document){
	var calendar = new LCalendar();
	calendar.init({
		'trigger': '#timer', //标签id
		'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
		'minDate': (new Date().getFullYear()-3) + '-' + 1 + '-' + 1, //最小日期
		'maxDate': (new Date().getFullYear()+3) + '-' + 12 + '-' + 31 //最大日期
	});
})(document);

(function($){
	 function adddom(type, parents){
	 	var str = '';
	 	switch(type){
	 		case 'address':
	 			str = '<div class="jump-bottom"><div class="addresslist">'+
	 			'<ul><li class="line" data-id="0">回龙观服务站</li>'+
	 			'<li class="line" data-id="1">常营服务站</li>'+
	 			'<li class="line" data-id="2">梨园服务站</li>'+
	 			'<li class="line" data-id="3">旧宫服务站</li>'+
	 			'<li class="line" data-id="4">黄村服务站</li>'+
	 			'<li data-id="5">香山服务站</li>'+
	 			'</ul></div></div>';
	 			break;
	 		case 'time':
	 			str = '<div class="jump-bottom"><div class="addresslist">'+
	 			'<ul><li class="line" data-id="0">上午</li>'+
	 			'<li class="line" data-id="1">下午</li>'+
	 			'</ul></div></div>';
	 			break;
	 		case 'sertype':
	 			str = '<div class="jump-bottom"><div class="addresslist">'+
	 			'<ul><li class="line" data-id="0">装饰美容</li>'+
	 			'<li class="line" data-id="1">维修保养</li>'+
	 			'</ul></div></div>';
	 			break;
	 		case 'car_type':
	 			str = '<div class="jump-bottom"><div class="addresslist">'+
	 			'<ul><li class="line" data-id="0">7座车</li>'+
	 			'<li class="line" data-id="1">5座车</li>'+
	 			'</ul></div></div>';
	 			break;
	 	}
	 	$('body').append(str);
	 	if(parents.attr('data-id')){
	 		$('.jump-bottom li').removeClass('bluecolor');
	 		$('.jump-bottom li').eq(parents.attr('data-id')).addClass('bluecolor');
	 	}
	 	$('.jump-bottom').on('click', function(e){
		 	e.stopPropagation();
		 	$('.jump-bottom').empty();
		 	$('.jump-bottom').replaceWith(null);
		 })
	 	$('.addresslist li').on('click', function(){
 			parents.val($(this).text()).attr('data-id', $(this).attr('data-id'));
	 	})
	 }
	 //点击事件
	 $('#address').click(function(){
	 	adddom('address', $(this));
	 })
	 $('#timetwo').click(function(){
	 	adddom('time', $(this));
	 })
	 $('#sertype').click(function(){
	 	adddom('sertype', $(this));
	 })
	 $('#car_type').click(function(){
	 	adddom('car_type', $(this));
	 })
	 function isPhone(phone){
		var Phonetest = /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/;
		return Phonetest.test(phone);
	}
	 function judge(val, name, text, reguar){
	 	if (reguar) {
	 		if (val && regular.test(val)) {
	 			name = val;
	 		} else {
	 			alert(text);
	 			return;
	 		}
	 	} else {
	 		if (val) {
	 			name = val;
	 		} else {
	 			alert(text);
	 			return;
	 		}
	 	}
	 }
	 $('.submit').click(function(){
	 	var address, timeer, sertype, name, codecar, car_type, mobile;
	 	if ($('#address').val()) {address = $('#address').val();} else {alert('请选择从服务地点');return;}
	 	if ($('#timer').val()) {address = $('#timer').val();} else {alert('请选择预约时间');return;}
	 	if ($('#sertype').val()) {address = $('#sertype').val();} else {alert('请选择服务类型');return;}
	 	if ($('#name').val()) {address = $('#name').val();} else {alert('请填写姓名');return;}
	 	if ($('#codecar').val()) {address = $('#codecar').val();} else {alert('请填写车牌号码');return;}
	 	if ($('#car_type').val()) {address = $('#car_type').val();} else {alert('请选择车型');return;}
	 	if ($('#mobile').val()) {address = $('#mobile').val();} else {alert('请填写联系方式');return;}
	 	// $.post('',{},function(date){
	 	// 	if(){

	 	// 	}
	 	// })
	 })
})(jQuery);

