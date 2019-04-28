## DB設計
## Userテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|text|null: false|

### Association
- has_many :groups
- has_many :messages
- has_many :members

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|references|null: false, foreign_key: true|
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
|message_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|
|content|text|null: false|
|image|text|

### Association
- ### Association
- belongs_to :user
- belongs_to :group
- belongs_to :member

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
