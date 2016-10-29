# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Stat.create(date: "2/10/2016", calls_made: 96, contacts_made: 5, deals_won: 2, deals_lost: 1, user_id: 1, opportunities: 3)
Stat.create(date: "3/10/2016", calls_made: 80, contacts_made: 7, deals_won: 0, deals_lost: 1, user_id: 1, opportunities: 1)
Stat.create(date: "4/10/2016", calls_made: 74, contacts_made: 11, deals_won: 3, deals_lost: 1, user_id: 1, opportunities: 4)
Stat.create(date: "5/10/2016", calls_made: 99, contacts_made: 12, deals_won: 0, deals_lost: 0, user_id: 1, opportunities: 0)
Stat.create(date: "6/10/2016", calls_made: 94, contacts_made: 5, deals_won: 3, deals_lost: 2, user_id: 1, opportunities: 5)
Stat.create(date: "7/10/2016", calls_made: 103, contacts_made: 11, deals_won: 2 , deals_lost: 1, user_id: 1, opportunities: 3)
Stat.create(date: "8/10/2016", calls_made: 78, contacts_made: 8, deals_won: 0, deals_lost: 1, user_id: 1, opportunities: 1)
Stat.create(date: "9/10/2016", calls_made: 104, contacts_made: 9, deals_won: 0, deals_lost: 1, user_id: 1, opportunities: 1)
Stat.create(date: "10/10/2016", calls_made: 93, contacts_made: 7, deals_won: 0, deals_lost: 1, user_id: 1, opportunities: 1)
Stat.create(date: "11/10/2016", calls_made: 101, contacts_made: 12, deals_won: 0, deals_lost: 1, user_id: 1, opportunities: 1)
Stat.create(date: "12/10/2016", calls_made: 85, contacts_made: 8, deals_won: 3, deals_lost: 1, user_id: 1, opportunities: 4)
Stat.create(date: "13/10/2016", calls_made: 97, contacts_made: 9, deals_won: 1, deals_lost: 0, user_id: 1, opportunities: 1)
Stat.create(date: "14/10/2016", calls_made: 86, contacts_made: 12, deals_won: 1, deals_lost: 1, user_id: 1, opportunities: 2)
Stat.create(date: "15/10/2016", calls_made: 99, contacts_made: 8, deals_won: 0, deals_lost: 0, user_id: 1, opportunities: 0)
Stat.create(date: "16/10/2016", calls_made: 102, contacts_made: 9, deals_won: 0, deals_lost: 0, user_id: 1, opportunities: 0)
Stat.create(date: "17/10/2016", calls_made: 106, contacts_made: 11, deals_won: 0, deals_lost: 0, user_id: 1, opportunities: 0)
Stat.create(date: "18/10/2016", calls_made: 93, contacts_made: 8, deals_won: 0, deals_lost: 1, user_id: 1, opportunities: 1)
Stat.create(date: "19/10/2016", calls_made: 87, contacts_made: 10, deals_won: 1, deals_lost: 1, user_id: 1, opportunities: 2)
Stat.create(date: "20/10/2016", calls_made: 85, contacts_made: 3, deals_won: 3, deals_lost: 0, user_id: 1, opportunities: 1)
Stat.create(date: "21/10/2016", calls_made: 99, contacts_made: 5, deals_won: 0, deals_lost: 0, user_id: 1, opportunities: 1)
Stat.create(date: "22/10/2016", calls_made: 100, contacts_made: 8, deals_won: 0, deals_lost: 0, user_id: 1, opportunities: 0)
Stat.create(date: "23/10/2016", calls_made: 68, contacts_made: 6, deals_won: 0, deals_lost: 1, user_id: 1, opportunities: 1)
Stat.create(date: "24/10/2016", calls_made: 79, contacts_made: 9, deals_won: 1, deals_lost: 1, user_id: 1, opportunities: 2)
Stat.create(date: "25/10/2016", calls_made: 83, contacts_made: 6, deals_won: 0, deals_lost: 2, user_id: 1, opportunities: 2)
Stat.create(date: "27/10/2016", calls_made: 83, contacts_made: 6, deals_won: 0, deals_lost: 2, user_id: 1, opportunities: 2)
Stat.create(date: "28/10/2016", calls_made: 83, contacts_made: 6, deals_won: 0, deals_lost: 2, user_id: 1, opportunities: 2)
Stat.create(date: "29/10/2016", calls_made: 85, contacts_made: 6, deals_won: 1, deals_lost: 2, user_id: 1, opportunities: 2)

Contact.create(name: "John", last_name: "Smith", phone_number: "555-555-5555", email: "JohnS@google.com", company: "Google", user_id: 1)
Contact.create(name: "Sara", last_name: "Jane", phone_number: "555-555-5556", email: "SaraS@yahoo.com", company: "Yahoo", user_id: 1)
Contact.create(name: "Blake", last_name: "Ferris", phone_number: "555-555-5557", email: "Bferris@aol.com", company: "AOL", user_id: 1)
Contact.create(name: "Mary", last_name: "VanMeter", phone_number: "555-555-5558", email: "M.j.vanmeter@alpha.com", company: "Alpha", user_id: 1)
Contact.create(name: "Jake", last_name: "Snow", phone_number: "555-555-5559", email: "JakeS@google.com", company: "Google", user_id: 1)
Contact.create(name: "Amanda", last_name: "Rogers", phone_number: "555-555-5510", email: "Arogers@ml.com", company: "Merril Lynch", user_id: 1)
Contact.create(name: "Steven", last_name: "Stein", phone_number: "555-555-5511", email: "steves@rutgers.com", company: "Rutgers", user_id: 1)
Contact.create(name: "Lisa", last_name: "Leslie", phone_number: "555-555-5512", email: "lisa@orderly.com", company: "Orderly", user_id: 1)
Contact.create(name: "George", last_name: "Darke", phone_number: "555-555-5513", email: "George@shovel.com", company: "Shovel", user_id: 1)
Contact.create(name: "Jane", last_name: "Smith", phone_number: "555-555-5513", email: "JaneS@google.com", company: "Google", user_id: 1)
Contact.create(name: "Larry", last_name: "Lamar", phone_number: "555-555-5514", email: "Larry@acehardwarde.com", company: "Ace Hardware", user_id: 1)
Contact.create(name: "Rebecca", last_name: "Smith", phone_number: "555-555-5515", email: "Rebecca@google.com", company: "Google", user_id: 1)
Contact.create(name: "Jose", last_name: "Rose", phone_number: "555-555-5516", email: "Jose@yahoo.com", company: "Yahoo", user_id: 1)
Contact.create(name: "Michael", last_name: "Smith", phone_number: "555-555-5517", email: "MichaelS@google.com", company: "Google", user_id: 1)
Contact.create(name: "Michelle", last_name: "Smith", phone_number: "555-555-5518", email: "Michelle@google.com", company: "Google", user_id: 1)

Task.create(name: "Call John", body: "Discuss new products", assign_date: "20/10/2016", due_date: "29/10/2016", contact_id: 1, user_id: 1)
Task.create(name: "Call Sara", body: "Discuss next steps", assign_date: "20/10/2016", due_date: "29/10/2016", contact_id: 2, user_id: 1)
Task.create(name: "Meet Blake", body: "Paper signing", assign_date: "20/10/2016", due_date: "29/10/2016", contact_id: 3, user_id: 1)
Task.create(name: "Call Mary", body: "Discuss new products", assign_date: "20/10/2016", due_date: "31/10/2016", contact_id: 4, user_id: 1)
Task.create(name: "Call Jake", body: "Introduction", assign_date: "20/10/2016", due_date: "31/10/2016", contact_id: 5, user_id: 1)
Task.create(name: "Meet Amanda", body: "Renewal", assign_date: "20/10/2016", due_date: "31/10/2016", contact_id: 6, user_id: 1)
Task.create(name: "Call Steven", body: "Renewal", assign_date: "20/10/2016", due_date: "31/10/2016", contact_id: 7, user_id: 1)
Task.create(name: "Call Lisa", body: "Discuss new products", assign_date: "20/10/2016", due_date: "31/10/2016", contact_id: 8, user_id: 1)
Task.create(name: "Call George", body: "FOllow up on new purchase", assign_date: "20/10/2016", due_date: "31/10/2016", contact_id: 9, user_id: 1)
Task.create(name: "Call Jane", body: "Discuss new products", assign_date: "20/10/2016", due_date: "31/10/2016", contact_id: 10, user_id: 1)
