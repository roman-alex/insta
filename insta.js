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

			console.log('Будет завершено', new Date(Date.now() + (interval * maxvalue) ));
		},

		stop() {
			clearInterval(this.action);
		}

	},
	//addFollowers
	addFollowings: {
		action() {},

		start(interval = 35000, maxvalue = 1000) {
      let count = 1;

			this.action = setInterval( () => {
				let user = document.querySelector('._gs38e ._qv64e._gexxb');

		    if(count >= maxvalue) {
		      clearInterval(this.action);
		    }
				if(user) {
			    user.click();
			    count += 1;
			    console.log('Количество добавленых подписок: ', count-1);
			  } else {
					document.querySelector("._gs38e").scrollTo(0,document.querySelector("._gs38e").scrollHeight);
			  }

		  }, interval);
		},

		stop() {
			clearInterval(this.action);
		}
	},
	// addFollowersFrom
	addFollowersFrom: {
		action() {},

		start(interval = 30000, maxvalue = 1000, from = 1000) {
			let list = document.querySelectorAll('._gs38e ._qv64e._gexxb');
			let count = 1;
			this.action = setInterval( () => {
				if(count >= maxvalue) {
		      clearInterval(this.action);
		    }
			  if(list[from]) {
			    list[from].click();
			    count += 1;
			    console.log('Количество добавленых фаловеров: ', count-1);
			  } else {
			    document.querySelector("._gs38e").scrollTo(0,document.querySelector("._gs38e").scrollHeight);
					setTimeout(function() {
						ListVzlom555 = document.querySelectorAll('._gs38e ._qv64e._gexxb');
					}, (interval * 0.5) );
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

		start(interval = 45000, maxvalue = 1000) {
			let count = 1;
			let list = [...document.querySelectorAll('._gs38e ._qv64e._t78yp._4tgw8._njrw0')].reverse();

			this.action = setInterval( () => {
				if(count >= maxvalue || !list[count]) {
					clearInterval(this.action);
				}

				list[count].click();
			  count += 1;
			  console.log('Количество удаленых фаловеров: ', count-1);

			}, interval);

			console.log('Будет завершено', new Date(Date.now() + (interval * (maxvalue - count) ) ));
		},

		stop() {
			clearInterval(this.action);
		}
	}

}
