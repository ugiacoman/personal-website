(function() {
	var support = { animations : Modernizr.cssanimations },
	animEndEventNames = {
		'WebkitAnimation' : 'webkitAnimationEnd',
		'OAnimation' : 'oAnimationEnd',
		'msAnimation' : 'MSAnimationEnd',
		'animation' : 'animationend'
	},

	animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],

	hackCont = document.getElementById( 'hackCont' ),
	hackItems = hackCont.querySelector( 'ul.itemwrap' ).children,
	hackCurrent = 0,
	hackCount = hackItems.length,
	hid, tid, sid, fid,
	hackDelay = 2000,
	contentCurrent = 0;

	function init() {
		// set starting timeouts
		hid = setTimeout(hackTimer, hackDelay);
		sid = setTimeout(stuTimer, stuDelay);
		did = setTimeout(dabbleTimer, dabbleDelay);
		fid = setTimeout(frameTimer, frameDelay);

		// nav bar listeners
		//aboutBtn.addEventListener( 'click', function( ev ) { ev.preventDefault(); slide( 'about' ); } );
		//resumeBtn.addEventListener( 'click', function( ev ) { ev.preventDefault(); slide( 'resume' ); } );
		//portBtn.addEventListener( 'click', function( ev ) { ev.preventDefault(); slide( 'port' ); } );
		
	}

	/* seperate timer for each scrolling box */
	function hackTimer() {
		//console.log('hack check');
		clearTimeout(hid);
		if (contentCurrent === 0) {
			scroll('hackathons');
		}
	}

	// little bit repetitive but each scrolling box needs its own
	// onEndAnimation in its own scope 
	function scroll(line) {
		if (line === 'hackathons') {
			var currentItem = hackItems[ hackCurrent ];

			// always going to next item
			hackCurrent = hackCurrent < hackCount - 1 ? hackCurrent + 1 : 0;
			
			var nextItem = hackItems[ hackCurrent ];

			classesAdd(currentItem, nextItem);

			var onEndAnimationNextItem = function() {
				this.removeEventListener( animEndEventName, onEndAnimationNextItem );
				
				classesRemove(currentItem, nextItem);
				
				hid = setTimeout(hackTimer, hackDelay);

				/*++cntAnims;
				if( cntAnims === 2) {
					isAnimating = false;
				}*/
			}
		
			if (support.animations) {
				nextItem.addEventListener( animEndEventName, onEndAnimationNextItem );
			}
			else {
				console.log('no support for animations');
				onEndAnimationItem();
			}

		}
	}

	/* classie functions for scrolling boxes */
	function classesAdd(current, next) {
		classie.addClass(current, 'move-out');
		classie.addClass(next, 'show-next');
		classie.addClass(next, 'current');
	}
	function classesRemove(current, next) {
		classie.removeClass(current, 'current');
		classie.removeClass(current, 'move-out');
		classie.removeClass(next, 'show-next');
	}


	function slide(cont) {
		
		if(cont === 'resume') {
			if (contentCurrent != 1) {

				// update nav bar
				classie.addClass(resumeBtn, 'current');
				classie.removeClass(aboutBtn, 'current');
				classie.removeClass(portBtn, 'current');

				// update variables
				var currentView = contentItems[ contentCurrent ];
				contentCurrent = 1;
				var nextView = contentItems[ contentCurrent ];

				// start animations
				classie.addClass(currentView, 'slide-out');
				classie.addClass(nextView, 'slide-next');
				classie.addClass(nextView, 'current');

				var onEndAnimationNextView = function() {
					this.removeEventListener( animEndEventName, onEndAnimationNextView );

					classie.removeClass(currentView, 'slide-out');
					classie.removeClass(currentView, 'current');
					classie.removeClass(nextView, 'slide-next');
				}

				if (support.animations) {
					nextView.addEventListener( animEndEventName, onEndAnimationNextView );
				}
				else {
					console.log('no support for animations/transitions');
					onEndAnimationNextView();
				}
			}
		}
		else if (cont === 'about') {
			if (contentCurrent != 0) {
				classie.addClass(aboutBtn, 'current');
				classie.removeClass(resumeBtn, 'current');
				classie.removeClass(portBtn, 'current');

				var currentView = contentItems[ contentCurrent ];
				contentCurrent = 0;
				var nextView = contentItems[ contentCurrent ];
				classie.addClass(currentView, 'slide-out');
				classie.addClass(nextView, 'slide-next');
				classie.addClass(nextView, 'current');

				var onEndAnimationNextView = function() {
					this.removeEventListener( animEndEventName, onEndAnimationNextView );

					classie.removeClass(currentView, 'slide-out');
					classie.removeClass(currentView, 'current');
					classie.removeClass(nextView, 'slide-next');

					hid = setTimeout(hackTimer, hackDelay);
					sid = setTimeout(stuTimer, stuDelay);
					did = setTimeout(dabbleTimer, dabbleDelay);


				}

				if (support.animations) {
					nextView.addEventListener( animEndEventName, onEndAnimationNextView );
				}
				else {
					console.log('no support for animations/transitions');
					onEndAnimationNextView();
				}
			}
			
		}
		else if (cont === 'port') {
			if (contentCurrent != 2) {
				classie.addClass(portBtn, 'current');
				classie.removeClass(aboutBtn, 'current');
				classie.removeClass(resumeBtn, 'current');

				var currentView = contentItems[ contentCurrent ];
				contentCurrent = 2;
				var nextView = contentItems[ contentCurrent ];
				classie.addClass(currentView, 'slide-out');
				classie.addClass(nextView, 'slide-next');
				classie.addClass(nextView, 'current');

				var onEndAnimationNextView = function() {
					this.removeEventListener( animEndEventName, onEndAnimationNextView );

					classie.removeClass(currentView, 'slide-out');
					classie.removeClass(currentView, 'current');
					classie.removeClass(nextView, 'slide-next');

				}

				if (support.animations) {
					nextView.addEventListener( animEndEventName, onEndAnimationNextView );
				}
				else {
					console.log('no support for animations/transitions');
					onEndAnimationNextView();
				}
			}
			
		}
			
	}

	// currently unused 
	function clearAllTimeouts() {
		clearTimeout(hid);
		clearTimeout(sid);
		clearTimeout(did);
		console.log('hid: ' + hid + ' sid: ' + sid + ' did: ' + did);
	}

	init();
})();