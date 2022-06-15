import { useState, useEffect } from "react";

let globalState = {};
let listeners = {};
let actions = {};

export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

    const dispatch = (actionIdentifier, payload)

};
