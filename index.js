function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var line = katzDeliLine[0]
    katzDeliLine.shift()
    return `Currently serving ${line}.`

 } else {
    return "There is nobody waiting to be served!"
 }
 katzDeliLine.shift()
}

function currentLine(line) {
  if (line.length === 0) {
    return 'The line is currently empty.'
  } else {
    var sentence = "The line is currently: "
    for (var i = 0; i < line.length; i++) {
      sentence += `${i + 1}. ${line[i]}, `
    }
    return sentence.slice(0, -2)
  }
}
