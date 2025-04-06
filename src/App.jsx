import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import './index.css';
import './App.css'
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger)
const gsapScrolltrigger = () => {
  const scrollRef = useRef();

  useGSAP(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150 *(boxes.indexOf(box) + 5),
        rotation: 360,
        borderRadius: '100%',
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start : "bottom bottom",
          end : 'top 20%',
          scrub: true , 
        }, 
        ease: 'power1.inOut'
      });
    });
  }, {scope: scrollRef});

  return scrollRef; // Return the ref to be used in the component
};


function App() {

  useGSAP(() => {
    gsap.to('#green-box', {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotate: 360,
      duration: 2,
      ease: 'power1.inOut',
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo('#red-box',
      {
        x: 0,
        borderRadius: '0%',
      },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        rotate: 360,
        duration: 2,
        ease: 'bounce.out',
        borderRadius: '50%',
      }
    );
  }, []);

  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: -1,
    yoyo: true,
  })

  useGSAP(() => {
    timeline.to('#yellow-box', {
      x:250,
      borderRadius: '100%',
      duration: 2,
      ease: 'back.inOut'
    });

    timeline.to('#yellow-box', {
      y:250,
      scale : 2,
      rotation : 360,
      borderRadius: '100%',
      duration: 2,
      ease: 'back.inOut'
    });

    timeline.to('#yellow-box', {
      x:500,
      borderRadius: '8px',
      scale : 1,
      rotation : 360,
      duration : 2,
      ease : 'back.inOut'
    }
    ) 
    timeline.to('#yellow-box', {
      x:500,
      scale : 1,
      borderRadius: '8px',
      rotation : 360,
      duration : 2,
      ease : 'back.inOut'
    }
    )
  }, []);


  useGSAP(() => {

    gsap.to('.stagger-box', {
      y:250,
      rotation: 360,
      borderRadius: '100%',
      repeat: -1,
      yoyo: true,
      // stagger: 0.5 ,

      stagger: {
        amount: 1,
        grid: [2,1],
        axis: 'y',
        ease : 'circ.inOut',
        from : 'start',
      }
    }
    )
  }, []);


  useGSAP(() => {
    gsap.to('#text_233', {
      ease: 'power1.inOut',
      opacity: 1,
      y: 0,
    });
  });

  useGSAP ( () => {
    gsap.fromTo ('.para' , {
      opacity : 0, 
      y : 20,
    }, {
      opacity: 1,
      y : 0, 
      delay : 1,
      stagger: 0.1,
    })
  })

  // Call the function after your DOM is ready (like after the element is rendered)
window.addEventListener('DOMContentLoaded', () => {
  GrabText();
});

return (
  <>
  <h1 className="text-3xl font-bold text-gray-900 mt-12">GsapFrom</h1>

  <p className="mt-5 text-gray-600 max-w-2xl leading-relaxed">
    The <code className="bg-gray-100 px-1 py-0.5 rounded">gsap.from()</code> method is used to animate elements from a new state to their current state.
  </p>

  <p className="mt-5 text-gray-600 max-w-2xl leading-relaxed">
    The <code className="bg-gray-100 px-1 py-0.5 rounded">gsap.from()</code> method is similar to the{" "}
    <code className="bg-gray-100 px-1 py-0.5 rounded">gsap.to()</code> method, but the difference is that it animates elements from a new state to their current state.
  </p>

  <p className="mt-5 text-gray-600 max-w-2xl leading-relaxed">
    Read more about the{" "}
    <a
      href="https://greensock.com/docs/v3/GSAP/gsap.from()"
      target="_blank"
      rel="noreferrer noopener nofollow"
      className="text-blue-600 underline hover:text-blue-800"
    >
      gsap.from()
    </a>{" "}
    method.
  </p>

  <div className="mt-20">
    <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg shadow-lg" />
  </div>

  <h1 className="text-3xl font-bold text-gray-900 mt-20">GsapFromTo</h1>

  <p className="mt-5 text-gray-600 max-w-2xl leading-relaxed">
    The <code className="bg-gray-100 px-1 py-0.5 rounded">gsap.fromTo()</code> method is used to animate elements from a new state to a new state.
  </p>

  <p className="mt-5 text-gray-600 max-w-2xl leading-relaxed">
    The <code className="bg-gray-100 px-1 py-0.5 rounded">gsap.fromTo()</code> method is similar to{" "}
    <code className="bg-gray-100 px-1 py-0.5 rounded">gsap.from()</code> and{" "}
    <code className="bg-gray-100 px-1 py-0.5 rounded">gsap.to()</code> methods, but it animates from a new state to a new state.
  </p>

  <p className="mt-5 text-gray-600 max-w-2xl leading-relaxed">
    Read more about the{" "}
    <a
      href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
      target="_blank"
      rel="noreferrer noopener nofollow"
      className="text-blue-600 underline hover:text-blue-800"
    >
      gsap.fromTo()
    </a>{" "}
    method.
  </p>

  <div className="mt-20">
    <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg shadow-lg" />
  </div>

  <h1 className="text-3xl font-bold text-gray-900 mt-20">GsapTimeline</h1>

  <p className="mt-5 text-gray-600 max-w-2xl leading-relaxed">
    The <code className="bg-gray-100 px-1 py-0.5 rounded">gsap.timeline()</code> method is used to create a timeline instance that can be used to manage multiple animations.
  </p>

  <p className="mt-5 text-gray-600 max-w-2xl leading-relaxed">
    It allows you to sequence animations, unlike other gsap methods like{" "}
    <code className="bg-gray-100 px-1 py-0.5 rounded">gsap.to()</code>,{" "}
    <code className="bg-gray-100 px-1 py-0.5 rounded">gsap.from()</code>, or{" "}
    <code className="bg-gray-100 px-1 py-0.5 rounded">gsap.fromTo()</code> which work on a single transition.
  </p>

  <p className="mt-5 text-gray-600 max-w-2xl leading-relaxed">
    Read more about the{" "}
    <a
      href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
      target="_blank"
      rel="noreferrer noopener nofollow"
      className="text-blue-600 underline hover:text-blue-800"
    >
      gsap.timeline()
    </a>{" "}
    method.
  </p>

  <div className="mt-20 space-y-10">
    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow transition" onClick={() => {
      if (timeline.paused()) {
        timeline.play();
      }
      else {
        timeline.pause();
      }
    }}>
      Play/Pause
    </button>

    <div id="yellow-box" className="w-20 h-20 bg-yellow-400 rounded-lg shadow-lg" />
  </div>


  <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box" />
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box" />
        </div>
      </div>


      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>

      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.{" "}
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{" "}
        method.
      </p>


      

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>
      <div className="mt-20 w-full h-screen" >
      <div className="mt-20 w-full h-screen" ref={gsapScrolltrigger()}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500"
        />
      </div>
  </div>

  <h1 id="text_233" className="opacity-0 translate-y-10">
        GsapText
      </h1>

      <p className="mt-5 text-gray-500 para">
        We can use same method like <code>gsap.to()</code>,{" "}
        <code>gsap.from()</code>, <code>gsap.fromTo()</code> and{" "}
        <code>gsap.timeline()</code> to animate text.
      </p>

      <p className="mt-5 text-gray-500 para">
        Using these methods we can achieve various text animations and effects
        like fade in, fade out, slide in, slide out, and many more.
      </p>

      <p className="mt-5 text-gray-500 para">
        For more advanced text animations and effects, you can explore the GSAP
        TextPlugin or other third-party libraries that specialize in text
        animations.
      </p>

      <p className="mt-5 text-gray-500 para">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/Plugins/TextPlugin"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          TextPlugin
        </a>{" "}
        plugin.
      </p>
    </>
  )
}

export default App
