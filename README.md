## DB設計
## Userテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|text|null: false|

### Association
- has_many :groups, through :members
- has_many :messages
- has_many :members

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|owner_user_id|references|null: false, foreign_key: true|
|menber_id|references|null: false, foreign_key: true|

### Association
- ### Association
- belongs_to :user
- belongs_to :message
- belongs_to :member

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|
|content|text|
|image|text|

### Association
- ### Association
- belongs_to :user
- belongs_to :group

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
