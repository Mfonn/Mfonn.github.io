var draw = function() {
  background(219, 255, 255);

if(mouseIsPressed)
  {   background(186, 231, 245);
  
       

        fill(255, 255, 255);
        rect(60, 150, 280, 207);
        
        for(var x = 0.87; x < 4; x++) {
          image(getImage("cute/RoofSouth"), x*70, 130, 70, 67);  
        }
         for(var x = 0.87; x < 4; x++) {
          image(getImage("cute/RoofSouth"), x*70, 175, 70, 67);  
        }
         for(var x = 0.87; x < 4; x++) {
          image(getImage("cute/RoofSouth"), x*70, 220, 70, 67);  
        }
         for(var x = 0.87; x < 4; x++) {
          image(getImage("cute/RoofSouth"), x*70, 265, 70, 67);  
        }
         for(var x = 0.87; x < 4; x++) {
          image(getImage("cute/RoofSouth"), x*70, 310, 70, 47);  
        }
        
         fill(133, 98, 85);
        rect(180, 280, 58, 78);
        
        
         fill(133, 98, 85);
        triangle(200, 28, 350, 150, 50, 150);

        fill(255, 234, 0);
        ellipse(370, 40, 50, 50);
        
        fill(133, 98, 85);
        rect(70, 200, 80, 50, 10);
        rect(250, 200, 80, 50, 10);
        

       image(getImage("cute/GrassBlock"), -10, 313, 440, 139);  
        
        
        
        image(getImage("cute/TreeTall"), -10, 323, 100, 84);
        image(getImage("cute/TreeTall"), 310, 323, 100, 84);
        
   
  } else {
    background(31, 12, 66);
    fill(245, 231, 231);
    ellipse(370,40, 50, 50);
    
    fill(78, 92, 173);
    triangle(200, 28, 350, 150, 50, 150);

    fill(194, 144, 194);
    rect(60, 150, 280, 207);

    fill(0, 51, 47);
    rect(180, 280, 40, 77);
        
    fill(194, 87, 87);
    rect(70, 200, 80, 50, 10);
    rect(250, 200, 80, 50, 10);
    
    image(getImage("cute/Star"), 130, 0, 20, 60);
      for(var x = 0; x < 12; x ++) {
    image(getImage("cute/GemOrange"), x*40, 325, 40, 80);
    }
  }   
};

  
