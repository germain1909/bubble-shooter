import React from 'react';
import Matter from 'matter-js';

export function World(props) {

    // module aliases
var Engine = Matter.Engine,
Render = Matter.Render,
World = Matter.World,
MouseConstraint = Matter.MouseConstraint,
Mouse = Matter.Mouse,
Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
element: document.body,
engine: engine
});

//rectangles go x,y,width,height
// create two boxes and a ground
//width = |        | vs |  |
//height = __              ___

//                   vs   
//                         ___

//         __
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
let ground = Bodies.rectangle(400, 610, 810, 7, { isStatic: true });
var leftBarrier= Bodies.rectangle(30, 610, 30, 810, { isStatic: true });
var rightBarrier= Bodies.rectangle(600, 610, 30, 810, { isStatic: true });
let topBarrier = Bodies.rectangle(400, 170, 810, 60, { isStatic: true });


// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground,leftBarrier,rightBarrier,topBarrier]);

 // add mouse control
 var mouse = Mouse.create(render.canvas),
 mouseConstraint = MouseConstraint.create(engine, {
     mouse: mouse,
     constraint: {
         stiffness: 0.2,
         render: {
             visible: false
         }
     }
 });

 

 World.add(engine.world, [boxA, boxB, ground,leftBarrier,rightBarrier,topBarrier,mouseConstraint]);

// keep the mouse in sync with rendering
render.mouse = mouse;

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

    return (
        

      <div>
        <h1>Germain</h1>
      </div>
    );
}
