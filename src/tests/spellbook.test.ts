import { expect, test } from "vitest";
import Spellbook from "../domain/Spellbook";
import Spell from "../domain/Spell";


test("Agrega corerectamente", () => {
    const book = new Spellbook();
    const spell = new Spell("Lumos", "Creates light", "book");
    book.addspell(spell);
    expect(book.getSpells()).toContain(spell);
});


test("No se puede agregar dos hechizoz iguales", () => {
    const book = new Spellbook();
    const spell = new Spell("Lumos", "Creates light", "book");
    book.addspell(spell);
    expect(()=> book.addspell(spell)).throw();
});

test("Muestra correctamente los hechizos", () => {
    const book = new Spellbook();
    const spell = new Spell("Lumos", "Creates light", "book");
    book.addspell(spell);
    expect( book.getSpells()).toEqual([spell]);
});

test("Filtra correctamente los spells por first apareance", () => {
    const book = new Spellbook();
    const spellBook = new Spell("Lumos", "Creates light", "book");
    const spellMovie = new Spell("Increible", "Ni idea", "movie");
    const spellBook2 = new Spell("hechizo", "Maravilloso", "book");
    book.addspell(spellBook);
    book.addspell(spellBook2);
    book.addspell(spellMovie);    
    expect( book.findByOrigin("book")).toEqual([spellBook, spellBook2]);
});

test("Filtra correctamente los spells por first apareance", () => {
    const book = new Spellbook();
    const spellBook = new Spell("Lumos", "Creates light", "book");
    const spellMovie = new Spell("Increible", "Ni idea", "movie");
    const spellBook2 = new Spell("hechizo", "Maravilloso", "book");
    book.addspell(spellBook);
    book.addspell(spellBook2);
    book.addspell(spellMovie);    
    expect( book.countByOrigin()).toEqual({book:2, movie: 1, videogame: 0});
});

