/*
Nesting
In the two examples above, the first one has one promise chain nested in the return value of another then() handler, while the second one uses an entirely flat chain. Simple promise chains are best kept flat without nesting, as nesting can be a result of careless composition. See common mistakes.

Nesting is a control structure to limit the scope of catch statements. Specifically, a nested catch only catches failures in its scope and below, not errors higher up in the chain outside the nested scope. When used correctly, this gives greater precision in error recovery:
*/
doSomethingCritical()
  .then(result =>
    doSomethingOptional(result)
      .then(optionalResult => doSomethingExtraNice(optionalResult))
      .catch(e => {})
  ) // Ignore if optional stuff fails; proceed.
  .then(() => moreCriticalStuff())
  .catch(e => console.error(`Critical failure: ${e.message}`))

// Note that the optional steps here are nested — with the nesting caused not by the indentation, but by the placement of the outer ( and ) parentheses around the steps.

// The inner error-silencing catch handler only catches failures from doSomethingOptional() and doSomethingExtraNice(), after which the code resumes with moreCriticalStuff(). Importantly, if doSomethingCritical() fails, its error is caught by the final (outer) catch only, and does not get swallowed by the inner catch handler.
