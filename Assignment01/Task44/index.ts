function sandwich_items(...items: string[]): void {
  console.log(`You ordered a sandwich with ${items.join(", ")}.\n`);
}

sandwich_items("ham", "cheese", "tomato");
sandwich_items("cheese", "tomato");
sandwich_items("ham", "cheese", "tomato", "lettuce", "mayo");
