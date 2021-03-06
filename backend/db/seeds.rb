# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(
  email: 'asharnadeemc@gmail.com', 
  username: 'asharnadeem', 
  first_name: 'Ashar', 
  last_name: 'Nadeem', 
  password: 'password'
)

Student.create!([
    { 
      english_name: "Ashar Nadeem",
      urdu_name: "اشعر ندیم",
      date_of_birth: Date.current,
      contact_number: "8005258967",
      fathers_english_name: "Muhammad Nadeem",
      fathers_urdu_name: "محمد ندیم",
      guardians_id: "123456789",
      current_address: "123 Drive, New York, NY",
      permanent_address: "123 Drive, New York, NY",
      previous_institute: "Masjid Fatima",
      previous_education: "Completed Quran",
      school_education: "University",
      admission_type: "Quran",
      admission_date: Date.current,
      admission_evaluator: "Muhammad Nadeem",
      admission_notes: "Starting daily classes",
      evaluator_recommendation: "Adult Class"
    },
    { 
      english_name: "Rayyan Nadeem",
      urdu_name: "ریان ندیم",
      date_of_birth: Date.current,
      contact_number: "8005258967",
      fathers_english_name: "Muhammad Nadeem",
      fathers_urdu_name: "محمد ندیم",
      guardians_id: "987654321",
      current_address: "123 Drive, New York, NY",
      permanent_address: "123 Drive, New York, NY",
      previous_institute: "ISB",
      previous_education: "Completed Quran",
      school_education: "High School",
      admission_type: "Hafiz Program",
      admission_date: Date.current,
      admission_evaluator: "Abdullah Azeem",
      admission_notes: "Full time Hafiz Program",
      evaluator_recommendation: "Adult Class"
    }
])

Teacher.create!([
  { 
    name: "Basil Nadeem",
    government_id: "123456789",
    phone_number: "8005258967",
    start_date: Date.current,
    end_date: Date.current
  }
])