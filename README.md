

## Employee Management CRUD
- Main Entities for which CRUD is working
- Custom Laravel Requests, to validate the API inputs
- Factory & seeders created for below entities
- UI created using ReactJS & Bootstrap
    - Employee
    - Department
    - Country
    - State
    - City
    - User -- view only
- Login:
    - React Login & register created using laravel-UI
- Employee import
    - Employee import form CSV file created.
    - Import Progress bar
    - Using Laravel Job Queues/Batches
    - cancel import Job/Batch working
    - tested for 10k records
    - for 10m records, increase relevant php configs

### TODO:
- User edit/delete
- bulk delete
- bulk import other records
- Employee level Login
    - Employee manage profile
- Token based authentication for external API Usage.