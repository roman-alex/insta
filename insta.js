// Roman Alekseev
// https://github.com/roman-alex/insta
// https://www.linkedin.com/in/roman-alekseev-62a87112b/
// skype: roman-alex555

const insta = {
	// scroll
	scroll: {
		action() {},

		start(interval = 1000, maxvalue = 1000) {
      let count = 1;
			this.action = setInterval( () => {
		    if(count >= maxvalue) {
		      clearInterval(this.action);
		    }
		    document.querySelector("._gs38e").scrollTo(0,document.querySelector("._gs38e").scrollHeight);
		    count += 1;
		  }, interval);
		},

		stop() {
			clearInterval(this.action);
		}

	},
	//addFollowers
	addFollowers: {
		action() {},

		start(interval = 30000, maxvalue = 1000) {
      let count = 1;

			this.action = setInterval( () => {
				let user = document.querySelector('._gs38e ._qv64e._gexxb');

		    if(count >= maxvalue) {
		      clearInterval(this.action);
		    }
				if(user) {
			    user.click();
			    count += 1;
			    console.log('Количество добавленых фаловеров: ', count);
			  } else {
			    document.querySelector("._gs38e").scrollTo(0,document.querySelector("._gs38e").scrollHeight);
			  }

		  }, interval);
		},

		stop() {
			clearInterval(this.action);
		}
	},
	//removeFollowings
	removeFollowings: {
		action() {},

		start(interval = 40000, maxvalue = 1000) {
			let count = 0;
			let list = [...document.querySelectorAll('._gs38e ._qv64e._t78yp._4tgw8._njrw0')].reverse();

			this.action = setInterval( () => {
				if(count >= maxvalue || !list[count]) {
					clearInterval(this.action);
				}

				list[count].click();
			  count += 1;
			  console.log('Количество удаленых фаловеров: ', maxvalue, 'Будет завершено', new Date(Date.now() + (interval * maxvalue) ));

			}, interval);
		},

		stop() {
			clearInterval(this.action);
		}
	}

}
