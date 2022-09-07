import React, { Component } from 'react';
import 'animate.css/animate.css';
class Waifu extends Component {
  render() {

    if(this.props.data){
      // var purl = this.props.data.purl;
      var deets = this.props.data.deets.map(function(deets){
        var deetsImage = 'https://mcrhky.github.io/resume/images/'+deets.image;
        return <div key={deets.title} className="three columns main-col">
          <div className="well ftr-well text-center">
            <img className="ftr-img" src={deetsImage} alt="" />
            <hr/>
            <h3 className="ftr-h3">{deets.title}</h3>
            <p className="ftr-p">
              {deets.description}
            </p>
          </div>
        </div>
      })
    }

    return (
      <section id="waifu">

      <div className="row">

      <h1 className="waifu-h1">Reach out to me.</h1>

            {deets}
      </div>
   </section>
    );
  }
}

export default Waifu;
