import React, { useState } from 'react';
import { Popover, Button, PopoverHeader, PopoverBody } from 'reactstrap';

function Example(args) {
 

  return (
    
      <div>
  <Button
    id="Popover1"
    type="button"
  >
    Launch Popover
  </Button>
  <Popover
    target="Popover1"
    toggle={function noRefCheck(){}}
  >
    <PopoverHeader>
      Popover Title
    </PopoverHeader>
    <PopoverBody>
      Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
    </PopoverBody>
  </Popover>
</div>
   
  );
}

export default Example;