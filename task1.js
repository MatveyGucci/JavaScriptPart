Date.prototype.daysTo = function(otherDate) {
    const diff = Math.abs(otherDate.getTime() - this.getTime());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
    return days;
  }
  const d1 = new Date('2023-01-01');
  const d2 = new Date('2023-03-12');

  console.log(d1.daysTo(d2));