<template>
	<div class="text-center">
		<section id="city-lists" class="section">
      		<div class="container">
      			<h1>江戸川の天気情報</h1>
				<ul>
					<li>天気：{{weather}}</li>
					<li>
						<img :src="'https://openweathermap.org/img/w/'+item.weather[0].icon+'.png'" />
					</li>
					<li>温度：{{item.main.temp}}℃</li>
					<li>湿度：{{item.main.humidity}}％</li>
					<li>風速：{{item.wind.speed}}m</li>
				</ul>
      		</div>
		</section>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			cities: ""
		}
	},
	async asyncData({route, app, error}) {
		try {
		    const item = await app.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${route.params.name},jp&units=metric&lang=ja&appid=${process.env.WEATHER_API_KEY}`)
		    let weather = "";
			switch (item.weather[0].main){
				case "Clear":
					weather = "晴れ";
					break;
				case "Rain":
					weather = "雨";
					break;
				case "Clear":
					weather = "晴れ";
					break;
				case "Clouds":
					weather = "くもり";
					break;
				case "Snow":
					weather = "雪";
					break;
				default:
					weather = item.weather[0].main;
					break;
			}
			let cities = {
				Hokkaido: '北海道',
			   	Aomori: '青森県',
			   	Iwate: '岩手県',
			   	Miyagi: '宮城県',
			   	Akita: '秋田県',
			   	Yamagata: '山形県',
			   	Fukushima: '福島県',
			   	Ibaraki: '茨城県',
			   	Tochigi: '栃木県',
		    	Gunma: '群馬県',
		    	Saitama: '埼玉県',
		    	Chiba: '千葉県',
		    	Tokyo: '東京都',
		    	Kanagawa: '神奈川県',
		    	Niigata: '新潟県',
		    	Toyama: '富山県',
		    	Ishikawa: '石川県',
		    	Fukui: '福井県',
		    	Yamanashi: '山梨県',
		    	Nagano: '長野県',
		    	Gifu: '岐阜県',
		    	Shizuoka: '静岡県',
		    	Aichi: '愛知県',
		    	Mie: '三重県',
		    	Shiga: '滋賀県',
		    	Kyoto: '京都府',
		    	Osaka: '大阪府',
		    	Hyogo: '兵庫県',
		    	Nara: '奈良県',
		    	Wakayama: '和歌山県',
		    	Tottori: '鳥取県',
		    	Shimane: '島根県',
		    	Okayama: '岡山県',
		    	Hiroshima: '広島県',
		    	Yamaguchi: '山口県',
		    	Tokushima: '徳島県',
		    	Kagawa: '香川県',
		    	Ehime: '愛媛県',
		    	Kochi: '高知県',
		    	Fukuoka: '福岡県',
		    	Saga: '佐賀県',
		    	Nagasaki: '長崎県',
		    	Kumamoto: '熊本県',
		    	Oita: '大分県',
		    	Miyazaki: '宮崎県',
		    	Kagoshima: '鹿児島県',
		    	Okinawa: '沖縄県'
			}
		    return {
		      item,
		      weather,
		      cities
		    }
		} catch (err) {
			error({
				statusCode: err.response.status,
				message: err.response.data.message,
			});
		}
	}
}
</script>

<style scoped>
li{
  list-style: none;
}
img{
  width: 20%;
}
</style>
