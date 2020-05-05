# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
User.create([
  { name: 'Taro', address: 'Tokyo', age: '10' },
  { name: 'Jiro', address: 'London', age: '12' }
])

Task.create([
  { name: 'Buy milk', description: 'hogehoge' },
  { name: 'Buy butter', description: 'hogehogebutter' }
])
