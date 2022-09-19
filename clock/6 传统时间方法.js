function dateFormat (dtStr) {
    const date =new Date(dtStr)
    
    const n =date.getFullYear()

    const m=buling(date.getMonth()+1)

    const d=buling(date.getDate())

    const hh=buling(date.getHours())

    const mm =buling(date.getMinutes())

    const ss =buling(date.getSeconds())

     return `${n}-${m}-${d} ${hh}:${mm}:${ss}`

}

// 补零
function buling(n) {
 return  n<9 ? '0'+9 : n
}
module.exports={
    dateFormat
}