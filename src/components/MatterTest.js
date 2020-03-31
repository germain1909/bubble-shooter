import React from 'react';
import Matter from 'matter-js';
import orange from '../sprites/orange.png'

export function MatterTest(props) {

    var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Events = Matter.Events,
    Common = Matter.Common,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
    world = engine.world;

// create renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 800,
        height: 600,
        showVelocity: true,
        wireframes: false, // disable Wireframe
        showAngleIndicator: true
    }
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

// add bodies
var ground = Bodies.rectangle(395, 600, 815, 50, { isStatic: true }),
        rockOptions = { density: 0.004,restitution:1},
        rock = Bodies.polygon(170, 450, 8, 20, rockOptions),
        anchor = { x: 170, y: 450 },
        elastic = Constraint.create({ 
            pointA: anchor, 
            bodyB: rock, 
            stiffness: 0.05
        });
World.add(world, [
    Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
    ground,
    elastic,
    rock,
    Bodies.rectangle(800, 300, 50, 600, { isStatic: true,restitution:1 }),
    Bodies.rectangle(0, 300, 50, 600, { isStatic: true,restitution:1 })
]);

engine.world.gravity.y = -1;

var stack = Composites.stack(50, 120, 11, 5, 0, 0, function(x, y) {

    //maybe switch statement here
    return Bodies.rectangle(x, y, Common.random(20, 50), Common.random(20, 50),
    {

    render: {
        sprite: {
            texture:orange,
            xScale: 0.04,
            yScale: 0.04
        }
    }
}
    ) 
});

World.add(world, stack);

Events.on(engine, 'afterUpdate', function() {
    if (mouseConstraint.mouse.button === -1 && (rock.position.x > 190 || rock.position.y < 430)) {
        rock = Bodies.polygon(170, 450, 7, 20, rockOptions);
        World.add(engine.world, rock);
        elastic.bodyB = rock;
    }
});

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

World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// fit the render viewport to the scene
Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 600 }
});

    return (
        
        <div>
          <h1>Germain</h1>
          <img src={orange} alt='t'></img>
        </div>
      );
  }