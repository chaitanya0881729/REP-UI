import React from 'react';
import '../../styles/Testimonials.css'

const Testimonials = () => {
  return (
    <main>
      <article className="card card-1">
        <div className="card__head">
          <img src="" alt="" />
          <div className="card__user">
            <div className="name">Daniel Clifford</div>
            <p className="title">Verified Graduate</p>
          </div>
        </div>
        <div className="card__heading">
          I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.
        </div>
        <p className="card__detail">
          “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
        </p>
      </article>
      <article className="card card-2">
        <div className="card__head">
          <img src="" alt="" />
          <div className="card__user">
            <div className="name">Jonathan Walters</div>
            <p className="title">Verified Graduate</p>
          </div>
        </div>
        <div className="card__heading">
          The team was very supportive and kept me motivated
        </div>
        <p className="card__detail">
          “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”      
        </p>
      </article>
      <article className="card card-3">
        <div className="card__head">
          <img src="" alt="" />
          <div className="card__user">
            <div className="name">Jeanette Harmon</div>
            <p className="title">Verified Graduate</p>
          </div>
        </div>
        <div className="card__heading">
          An overall wonderful and rewarding experience
        </div>
        <p className="card__detail">
          “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”
        </p>
      </article>
      <article className="card card-4">
        <div className="card__head">
          <img src="" alt="" />
          <div className="card__user">
            <div className="name">Patrick Abrams</div>
            <p className="title">Verified Graduate</p>
          </div>
        </div>
        <div className="card__heading">
          Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.
        </div>
        <p className="card__detail">
          “ The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”
        </p>
      </article>
      <article className="card card-5">
        <div className="card__head">
          <img src="" alt="" />
          <div className="card__user">
            <div className="name">Kira Whittle</div>
            <p className="title">Verified Graduate</p>
          </div>
        </div>
        <div className="card__heading">
          Such a life-changing experience. Highly recommended!
        </div>
        <p className="card__detail">
          “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my development experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”
        </p>
      </article>
    </main>
  );
}

export default Testimonials;
