class Item {
  // Private fields
  #id
  #title
  #year

  constructor(id, title, year) {
    this.#id = id
    this.#title = title
    this.#year = year
  }

  // Getters
  get id() {
    return this.#id
  }

  get title() {
    return this.#title
  }

  get year() {
    return this.#year
  }

  // Instance method
  describe() {
    return `${this.title} (${this.year})`
  }

  static compareYear(itemA, itemB) {
    return itemA.year - itemB.year
  }
}

// Subclass: Book
class Book extends Item {
  #author
  #genre

  constructor(id, title, year, author, genre) {
    super(id, title, year)
    this.#author = author
    this.#genre = genre
  }

  // Getters
  get author() {
    return this.#author
  }

  get genre() {
    return this.#genre
  }

  // Overriding describe method
  describe() {
    return `${super.describe()} by ${this.#formatAuthor()} [${this.genre}]`
  }

  #formatAuthor() {
    return this.#author.toUpperCase()
  }
}

// Subclass: Magazine
class Magazine extends Item {
  #month

  constructor(id, title, year, month) {
    super(id, title, year)
    this.#month = month
  }

  // Getters
  get month() {
    return this.#month
  }

  // Overriding describe method
  describe() {
    return `${super.describe()} - ${this.month}`
  }
}

// Base Class: User
class User {
  #id
  #name

  constructor(id, name) {
    this.#id = id
    this.#name = name
  }

  // Getters

  get id() {
    return this.#id
  }

  get name() {
    return this.#name
  }

  // Setter
  set rename(newName) {
    this.#name = newName
    console.log(`Member renamed to ${this.name}`)
  }

  describe() {
    return `User: ${this.name} (ID: ${this.id})`
  }
}

// Sublass: Member
class Member extends User {
  #borrowedItems

  constructor(id, name) {
    super(id, name)
    this.#borrowedItems = []
  }

  // Getter
  get borrowedItems() {
    return this.#borrowedItems
  }

  // Instance methods
  borrow(item) {
    this.#borrowedItems.push(item)
    console.log(`${this.name} borrowed "${item.title}".`)
  }

  returnItem(item) {
    const index = this.#borrowedItems.indexOf(item)
    if (index !== -1) {
      this.#borrowedItems.splice(index, 1)
      console.log(`${this.name} returned "${item.title}"`)
    } else {
      console.log(`${this.name} does not have "${item.title}" borrowed.`)
    }
  }

  describe() {
    return `${super.describe()} - Borrowed Items:  ${this.borrowedItems.length}`
  }
}

// Subclass: Librarian
class Librarian extends User {
  // Static Field to keep track o all librarians
  static allLibrarians = []

  constructor(id, name) {
    super(id, name)
    Librarian.allLibrarians.push(this)
  }

  // Static Method
  static listAllLibrarians() {
    return Librarian.allLibrarians.map((librarian) => librarian.name).join(', ')
  }

  // Instance Method
  manageItem(item) {
    console.log(`${this.name} is managing "${item.title}".`)
  }
}

// Mixin: Logger
const Logger = (Base) =>
  class extends Base {
    log(message) {
      console.log(`[LOG]: ${message}`)
    }
  }

// Applying Mixin to Librarian
class AdvancedLibrarian extends Logger(Librarian) {
  constructor(id, name) {
    super(id, name)
  }
  assist() {
    this.log(`${this.name} is assisting a member.`)
  }
}

// Named Class Expression
const Publisher = class PublisherClass {
  constructor(name) {
    this.name = name
  }

  publish(item) {
    console.log(`${this.name} is publishing "${item.title}".`)
  }
}

// Unnamed Class Expression
const Reviewer = class {
  constructor(name) {
    this.name = name
  }

  review(item) {
    console.log(`${this.name} is reviewing "${item.title}".`)
  }
}

// Using Classes Together

// Creating Items
const book1 = new Book(
  1,
  'JavaScript The Good Parts',
  2008,
  'Douglas Crockford',
  'Programming'
)
const magazine1 = new Magazine(2, 'National Geographic', 2023, 'October')

// Creating Users
const member1 = new Member(101, 'Alice')
const librarian1 = new Librarian(201, 'Bob')
const advancedLibrarian1 = new AdvancedLibrarian(202, 'Charlie')

// Creating Publishers and Reviewers
const publisher1 = new Publisher('Tech Books Publishing')
const reviewer1 = new Reviewer('Dave')

// Performing Operations
member1.borrow(book1)
member1.borrow(magazine1)
console.log(member1.describe()) // User: Alice (ID: 101) - Borrowed Items:  2

librarian1.manageItem(book1) // Bob is managing "JavaScript The Good Parts".
advancedLibrarian1.assist() // [LOG]: Charlie is assisting a member.

publisher1.publish(book1) // Tech Books Publishing is publishing "JavaScript The Good Parts".
reviewer1.review(magazine1) // Dave is reviewing "National Geographic".

// Using Static Method
const items = [book1, magazine1]
items.sort(Item.compareYear)
console.log(items.map((item) => item.describe()))
/*
Output:
[
  'JavaScript The Good Parts (2008) by DOUGLAS CROCKFORD [Programming]',
  'National Geographic (2023) - October'
]
*/

// Using Static Field in Librarian
console.log(Librarian.listAllLibrarians()) // Output: Bob, Charlie

// Renaming a Member
member1.rename = 'Alicia'

// Accessing Private Fields via Getters
console.log(member1.name)
