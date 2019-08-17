export class SDate extends Date {
    constructor(str, pattern) {


        super()
        this.parse(str, pattern)


    }

    parse(str, pattern) {

        const map = {
            YY: this.setFullYear,
            MM: this.setMonth,
            DD: this.setDate,
            hh: this.setHours,
            mm: this.setMinutes,
            ss: this.setSeconds
        }

        const patternArray = pattern.match(/[a-zA-Z]{2}/g)
        const numsArray = str.match(/[0-9]+/g)
        patternArray.map((p, i) => {
            map[p].call(this, numsArray[i])
        })

    }

    add(str, pattern) {
        const date = new Date();
        date.setTime(0)
        this.parse.call(date, str, pattern)
        const total = this.valueOf() + date.valueOf()
        const addDate = new SDate("00","ss")
        addDate.setTime(total)
        return addDate
    }

    compare(date) {
        const d1 = this.valueOf()
        const d2 = date.valueOf()
        if (d1 < d2) {
            return -1
        } else if (d1 === d2) {
            return 0
        } else {
            return 1
        }

    }

    format(pattern) {
        function padZero(n) {
            return n < 10 ? "0" + n : `${n}`
        }
        const map = {
            YY: this.getFullYear,
            MM: this.getMonth,
            DD: this.getDate,
            hh: this.getHours,
            mm: this.getMinutes,
            ss: this.getSeconds
        }
        const that = this
        return pattern.replace(/[a-zA-Z]{2}/g, function (match) {
            return padZero(map[match].call(that))
        })
    }
}
