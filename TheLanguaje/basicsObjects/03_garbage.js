function married(man, woman) {
    man.wife = woman;
    woman.husban = man;

    return {
        father: man,
        mother: woman
    }
}

let family = married({name: 'jorge'}, {name: 'mary'})

console.log(family);
console.log(family.father);
console.log(family.mother);

family.father = null

console.log(family.father);
console.log(family.mother)

