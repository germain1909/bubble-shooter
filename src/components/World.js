import React from 'react';
import Matter from 'matter-js';

export function World(props) {

    // module aliases
var Engine = Matter.Engine,
Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
element: document.body,
engine: engine
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });
var leftBarrier= Bodies.rectangle(400, 610, 30, 810, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground,leftBarrier]);

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
