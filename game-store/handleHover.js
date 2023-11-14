const handleHover = (e) => {
  let newHoverState = hoverState[e.target.id];
  newHoverState.hovered = !newHoverState.hovered;

  setHoverState([...hoverState, (hoverState[e.target.id] = newHoverState)]);
};

<AnimatePresence mode="wait" initial={false}></AnimatePresence>;
