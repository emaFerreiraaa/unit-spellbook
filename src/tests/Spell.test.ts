import { expect, test } from "vitest";
import Spell from "../domain/Spell";

const lumos = new Spell("Lumos", "Ilumina la punta de la varita", "book");

test("A spell from a book is original", () => {
  expect(lumos.isOriginal()).toBeTruthy();
});

test("should throw when the name is empty", () => {
  expect(() => new Spell("", "Makes things float", "book")).toThrow(
    "El nombre del hechizo no puede ser vacío",
  );
});

test("should throw when the description is empty", () => {
  expect(() => new Spell("Juan", "", "book")).toThrow();
});

test("should throw when the description is more large than 120", () => {
  const descriptionLarge = "ajsdkbjasdblsadlbjdsabjldsajbsdabjdasbjlksdabjkbjskdabjksadbjadsbjksdbajjkasdbjkldasbjkdsabjkldbsajkldasbjklbjldkasbjlaksdbjldksabjlaksdjkldsabaslkdjbaskjldbasasndjab"
  expect(() => new Spell("Juan", descriptionLarge, "book")).toThrow();
});

//"a".repeat(MAX_DESCRIPTION_LENGTH + 1);
test("should throw when the first appearance is not valid", () => {
  expect(() => new Spell("Juan", "Increible descipcion", "juego" as never)).toThrow();
});

test("should return the original label of the first appearence", () => {
  expect(lumos.getOriginLabel()).toBe("Libro");
});

test("Should return the name, origin label and descritption", () => {
  expect(lumos.describe()).toBe("Lumos (Libro): Ilumina la punta de la varita");
});
