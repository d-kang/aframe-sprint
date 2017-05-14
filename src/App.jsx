import React, { Component } from 'react';
import 'aframe';
import './components';
import {
  Player,
  Missile,
  LifeCube,
  EnemyDangerous,
  EnemyHarmless,
  Friendly,
  Particle
} from './entities';
import {
   showScoreUpdate,
   spawnEntities,
   createExplosion,
} from './utils';

const STARTING_LIVES = 3;

class App extends Component {
  constructor(props) {
    super(props);
    let startingLives = [];
    for (let i = 0; i < STARTING_LIVES; i++) {
      startingLives.push(i)
    }

    this.initialState = {
      score: 0,
      idx: 0,
      targets: [],
      lives: startingLives,
    };
    this.state = this.initialState;
  }

  componentDidMount(){
    window.addEventListener('destruction', e => {
      console.log('destruction', e.detail)
    })
    window.addEventListener('fly-away', e => {
      console.log('fly-away', e.detail)
    })
    window.addEventListener('missile-launch', e => {
      console.log('missile-launch', e.detail)
    })
    window.addEventListener('missile-hit', e => {
      console.log('missile-hit', e.detail)
    })

    document.getElementById('box').addEventListener('click', () => {console.log('hello from red box')})
    this.spawnEntities();
  }

  spawnEntities() {
    // let newEntities = spawnEntities(this.state.idx);
    let newEntities = spawnEntities(5);
    console.log('THIS.STATE.IDX', this.state.idx)
    // implement me


    console.log('spawnEntities Ran')
  }

  addTargets(newTargets) {
    this.setState(prevState => {
      return {
        targets: prevState.targets.concat(newTargets),
        idx: prevState.idx + (newTargets.length || 1),
      }
    })
  }

  removeTarget(idx) {
    this.setState(prevState => {
      return {
        targets: prevState.targets.filter(target=>target.props.idx !== idx)
      }
    })
  }

//how to click Box
// how to add text field
// they are self closing, did the this.state.lives need to be in there?

//{document.getElementById('box').addEventListener('click', () => {console.log('hello from red box')})}

  render() {
    return (
      <a-scene ref='scene'>
        <a-assets></a-assets>

        

        <a-entity id="box" geometry="primitive: box" onClick={()=>console.log('inline hello')} material="color: red" position="0 0 -2">
          <a-text color="black" height="" value="Clickable Red Cube" position="-0.5 1.5 0"></a-text>

        </a-entity>
        <a-camera>
          <a-cursor/>
        </a-camera>
        <Player ref='pl' position="0 0 -5" id="player" />
        <a-text color="black" height="" value="Player-One" position="-0.5 1.5 -5"></a-text>




          {this.state.lives}
          {this.state.targets}
          {spawnEntities()}
          {console.log('THIS', this)}
          {console.log('THIS.STATE', this.state)}
          {console.log('THIS.STATE.LIVES', this.state.lives)}
          {console.log('THIS.STATE.TARGETS', this.state.targets)}

          {console.log('this')}

        <Player position="0 0 -25" id="player2" />
        <a-text color="black" height="" value="Player-Two" position="-0.5 1.5 -25"></a-text>

        <Player position="0 10 -5" />
        <a-text color="black" height="" value="Player-Three" position="-0.5 11.5 -5"></a-text>
        <Player position="0 10 -25" />
        <a-text color="black" height="" value="Player-Four" position="-0.5 11.5 -25"></a-text>




        <EnemyDangerous position="10 0 -15" />
        <a-text color="black" height="" value="EnemyDangerous" position="9 1.5 -15"></a-text>
        <EnemyHarmless position="15 0 -15" />
        <a-text color="black" height="" value="EnemyHarmless" position="14 1.5 -15"></a-text>
        <Friendly position="20 0 -15" />
        <a-text color="black" height="" value="Friendly" position="19.5 1.5 -15"></a-text>
        <LifeCube position="5 0 -15" />
        <a-text color="black" height="" value="LifeCube" position="4.5 1.5 -15"></a-text>

        <Player position="35 0 -15" />
        <a-text color="black" height="" value="Player-Five" position="34.5 1.5 -15"></a-text>
        <Particle position="30 0 -15" />
        <a-text color="black" height="" value="Particle" position="29.5 1.5 -15"></a-text>






        <a-text color="black" height="" value="Rubix Cube" position="20 -3 -3"></a-text>
        <a-box id="redBox" position="20 -5 0" class="clickable" color="red"></a-box>
        <a-box position="20 -5 -1.5" color="green" ></a-box>
        <a-box color="orange" position="20 -5 -3" log="Hello, Box!"></a-box>


        <a-box id="redBox" position="22 -5 0" class="clickable" color="red"></a-box>
        <a-box position="22 -5 -1.5" color="green" ></a-box>
        <a-box color="orange" position="22 -5 -3" log="Hello, Box!"></a-box>

        <a-box id="redBox" position="18 -5 0" class="clickable" color="red"></a-box>
        <a-box position="18 -5 -1.5" color="green" ></a-box>
        <a-box color="orange" position="18 -5 -3" log="Hello, Box!"></a-box>

        <a-box id="redBox" position="20 -6.5 0" class="clickable" color="red"></a-box>
        <a-box position="20 -6.5 -1.5" color="green" ></a-box>
        <a-box color="orange" position="20 -6.5 -3" log="Hello, Box!"></a-box>


        <a-box id="redBox" position="22 -6.5 0" class="clickable" color="red"></a-box>
        <a-box position="22 -6.5 -1.5" color="green" ></a-box>
        <a-box color="orange" position="22 -6.5 -3" log="Hello, Box!"></a-box>

        <a-box id="redBox" position="18 -6.5 0" class="clickable" color="red"></a-box>
        <a-box position="18 -6.5 -1.5" color="green" ></a-box>
        <a-box color="orange" position="18 -6.5 -3" log="Hello, Box!"></a-box>

        <a-box id="redBox" position="20 -8 0" class="clickable" color="red"></a-box>
        <a-box position="20 -8 -1.5" color="green" ></a-box>
        <a-box color="orange" position="20 -8 -3" log="Hello, Box!"></a-box>

        <a-box id="redBox" position="22 -8 0" class="clickable" color="red"></a-box>
        <a-box position="22 -8 -1.5" color="green" ></a-box>
        <a-box color="orange" position="22 -8 -3" log="Hello, Box!"></a-box>

        <a-box id="redBox" position="18 -8 0" class="clickable" color="red"></a-box>
        <a-box position="18 -8 -1.5" color="green" ></a-box>
        <a-box color="orange" position="18 -8 -3" log="Hello, Box!"></a-box>






        <a-light color="#fff" position="-10 1 0"></a-light>
        <a-light type="point" color="blue" position="0 5 0"></a-light>
        <a-light type="ambient" color="#222"></a-light>
        <a-light angle="-1000"></a-light>
        <a-light distance="-1000"></a-light>
      </a-scene>
    );
  }
}

export default App;
