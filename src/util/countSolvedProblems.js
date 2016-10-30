const countSolvedProblems = problems => {
  let counter = 0
  problems.forEach(problem => {
    if (problem.status === 'ok') counter++
  })
  return counter
}

export default countSolvedProblems
