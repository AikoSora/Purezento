function findInArray(array, text) {
	return array.find(function (item) { return item === text })
}

$(document).ready(function(){
	var secret = 0
	var secret_is_done = false
	var array = []

	$("div#chibiBlock img").click(function(e){
		var chibiBlock = $(`#${e.currentTarget.alt}`)

		if (chibiBlock.length > 0) {
			$("#mainpage").animate({ opacity: "hide" }, "slow", function() {
				if (!findInArray(array, chibiBlock[0].id))
					array.push(chibiBlock[0].id)
				$(`#${chibiBlock[0].id}`).slideDown(200);
			})
		}

	})

	$("input[type=button]").click(function(e) {

		$(`#${this.id}`).animate({ opacity: "hide" }, "slow", function() {
			if (array.length != 6) {
				if (this.id != "aikoHi") {
					if (secret != 0) {
						secret = 0
						secret_is_done = false
						$("#aiko p.mail").text("Мать, с днем рождения, желаю счастья, денях побольше и успеха в жизни, ну а че еще надо желать когда есть я? В обсчем еще раз с др!")
					}
					$("#mainpage").slideToggle(200)
				} else if (this.id == "aikoHi") {
					$("#ilya").slideToggle(200)
				}
			} else {
				if (this.id != "aikoSayounara")
					$("#aikoSayounara").slideToggle(200)
				else
					$("#end").slideToggle(200)
			}
		})
	})

	$("#aiko div.chibi img").click(function(e) {
		let chibiName = "Aiko"
		let id = "AikoSecret"

		if (secret < 4) {
			secret = secret + 1
			$("#aiko div.chibi p").text(chibiName.substring(0,secret))

			if (chibiName[secret - 1] == "o") {
				$("#aiko p.mail").text("Не ну если на столько интересен этот сайт, так уж и быть, скажу, но только один раз!, люблю тебя... Как подругу конечно!!!! С днем рождения...")
				secret_is_done = !secret_is_done
				if (!findInArray(array, id))
					array.push(id)
			}
		}
	})

	$("#ilya p a.russian").click(function(e) {
		$("#ilya").animate({ opacity: "hide" }, "slow", function() {
			if (!findInArray(array, "aikoHi"))
				array.push("aikoHi")
			$(`#aikoHi`).slideDown(200);
		})
	})
})