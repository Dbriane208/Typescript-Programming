// The Problem: The Bag Of Optionals

type state = {
  status: "loading" | "success" | "error";
};

// we need to capture some data from the fetch or the error message if the fetch fails
type state0 = {
  status: "loading" | "success" | "error";
  error?: string;
  data?: string;
};

// And let's imagine we have a renderUI function that returns a string based on the input.

const renderUI = (state: state0) => {
  if (state.status === "loading") {
    return "Loading...";
  }

  // Without checking type safety we cannot call the state.error or data since they can be undefined
  if (state.status === "error") {
    return `Error: ${state.error?.toUpperCase()}`;
  }

  if (state.status === "success") {
    return `Data: ${state.data}`;
  }
};

/*
To solve the error without type safety we can use Discriminated Unions
A discriminated union is a type that has a common property, the 'discriminant', which is a literal type that is unique to each member of the union.
In our case, the status property is the discriminant.
*/

// let's take each status and separate them into separate object literals
// Then we can associate the error and data properties with the error and success statuses respectively
type state1 =
  | {
      status: "loading";
    }
  | {
      status: "error";
      error: string;
    }
  | {
      status: "success";
      data: string;
    };

/*
Without using type safety we can now remove the error
This is due to TypeScript's narrowing - it knows that state.status is "error", 
so it knows that state.error is a string inside of the if block.
*/

const renderUI0 = (state: state1) => {
  if (state.status === "loading") {
    return "Loading...";
  }

  // we can now call to uppercase without checking for type safety
  if (state.status === "error") {
    return `Error: ${state.error.toUpperCase()}`;
  }

  if (state.status === "success") {
    return `Data: ${state.data}`;
  }
};

// To clean up our original type, we could use a type alias for each of the statuses
type LoadingState = {
  status: "loading";
};

type ErrorState = {
  status: "error";
  error: string;
};

type SuccessState = {
  status: "success";
  data: string;
};

type State = LoadingState | ErrorState | SuccessState;

/*
  DO THE EXERCISES
  */

type Circle = {
  kind?: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;


const sq : Shape = {
  kind: "square",
  sideLength: 70
}

const cle : Shape = {
  kind: "circle",
  radius: 56
}

function calculateArea( shape: Shape) {
  if (shape.kind == "circle") {
    // using destructuring to extract values
    const {radius } = shape
    return Math.PI * radius * radius;
  } else if(shape.kind == "square"){
    const {sideLength} = shape
    return sideLength * sideLength;
  }
}

console.log(calculateArea(sq));

// Using switch to destructure 
function calculateArea0(shape: Shape) {
  switch(shape.kind){
    case 'circle':
      const {radius} = shape
      return Math.PI * radius * radius

    case 'square':
      const {sideLength} = shape
      return sideLength * sideLength  
  }
}

console.log(calculateArea0(cle));

// Handling Defaults with a Discriminated Union

function calculateArea1(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius * shape.radius
  } else if(shape.kind === 'square') {
    return shape.sideLength * shape.sideLength
  } else{
    return Math.PI * shape.radius * shape.radius
  }
}


// Discriminated tuples
// removing the bag of optionals from the APIResponse
type APIResponse = ['error',string] | ['success',User[]]

async function fetchData(): Promise<APIResponse> {
  try {
    const response = await fetch('https://api.example.com/data')

    if (!response.ok) {
      return [
        'error',
        // Imagine some improved error handling here
        'An error occurred',
      ]
    }

    const data = await response.json()

    return ['success', data]
  } catch (error) {
    return ['error', 'An error occurred']
  }
}

async function exampleFunc() {
  const [status, value] = await fetchData()

  if (status === 'success') {
    console.log(value)
  } else {
    console.error(value)
  }
}