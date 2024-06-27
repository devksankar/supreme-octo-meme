  // }

  eyes[0].show();
  eyes[1].show();

  // for (let eye of eyes) {
  //   eye.show();
  // }

  if (showSprings) {
    for (let spring of springs) {
      spring.show();
    }
  }

  if (mouseIsPressed) {
    particles[0].lock();
    particles[0].x = mouseX;
    particles[0].y = mouseY;
    particles[0].unlock();
  }
}
