import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      // var languagemessage = this.props.data.languagemessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.graduated}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
      var languages = this.props.data.languages.map(function(languages){
        var spokenstars = "☆☆☆☆☆";
        var writtenstars = "☆☆☆☆☆";
        if(languages.spoken === "5") {
          spokenstars = <span className="star-b">★★★★★</span>;
        } else if (languages.spoken === "4") {
          spokenstars = <span><span className="star-b">★★★★</span><span>☆</span></span>;
        } else if (languages.spoken === "3") {
          spokenstars = <span><span className="star-b">★★★</span><span>☆☆</span></span>;
        } else if (languages.spoken === "2") {
          spokenstars = <span><span className="star-b">★★</span><span>☆☆☆</span></span>;
        } else if (languages.spoken === "1") {
          spokenstars = <span><span className="star-b">★</span><span>☆☆☆☆</span></span>;
        } else {
          spokenstars = <span>☆☆☆☆☆</span>;
        }
        if(languages.written === "5") {
          writtenstars = <span className="star-b">★★★★★</span>;
        } else if (languages.written === "4") {
          writtenstars = <span><span className="star-b">★★★★</span><span>☆</span></span>;
        } else if (languages.written === "3") {
          writtenstars = <span><span className="star-b">★★★</span><span>☆☆</span></span>;
        } else if (languages.written === "2") {
          writtenstars = <span><span className="star-b">★★</span><span>☆☆☆</span></span>;
        } else if (languages.written === "1") {
          writtenstars = <span><span className="star-b">★</span><span>☆☆☆☆</span></span>;
        } else {
          writtenstars = <span>☆☆☆☆☆</span>;
        }
        return <div key={languages.name} className="six columns main-col"><h3>{languages.name}</h3>
        <p><span className="info">Spoken</span> {spokenstars} <br/> <span className="info">Written</span> {writtenstars}</p></div>
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>

    <div className="row work">

      <div className="three columns header-col">
          <h1><span>Languages</span></h1>
      </div>

      <div className="nine columns main-col">

      <div className="bars">
        {languages}
      </div>
    </div>
    </div>
   </section>
    );
  }
}

export default Resume;
