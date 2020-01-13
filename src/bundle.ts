import $ from "jquery";
import Person from "./Person";

$(function () {
    const _sato: Person = new Person("Sato", 21);
    const _yamada: Person = new Person("Yamada", 25);
    const _kato: Person = new Person("Kato", 20);

    Person.remove(_yamada);

    const member: Person[] = Person.getList();

    $("#greet").html(`${_sato.sayGreet()} I'm ${_sato.age} years old.`);

    $("#size").html(`number of member is ${member.length}.`);
    $("#member").html("member: " + member.join(", "));

    $("#kato").html(`${_kato.name} is ${_kato.age} years old.`);
});
