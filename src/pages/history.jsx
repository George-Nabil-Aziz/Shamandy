import { Icon } from "/src";

export const History = () => {
  return (
    <div>
      <p>30-09-2024: Breadcrumb</p>
      <p>30-09-2024: Router</p>
      <p>02-10-2024: 404 page</p>
      <p>02-10-2024: iconify-icon</p>
      <p>02-10-2024: Jubmotron</p>
      <p>02-10-2024: Prod deploy V.1</p>
      <p>04-10-2024: Button Component</p>
      <p>04-10-2024: Header, Sidebar, Footer</p>
      <p>04-10-2024: Dark theme</p>
      <p>05-10-2024: Stable project functions before any implementations</p>
      <p>06-10-2024: Adding table orders with names</p>
      <p>06-10-2024: Prod deploy V.2</p>
      <p>20-11-2024: Koshary, Tagen</p>
      <p>26-11-2024: Add total sandwichs count, total price</p>
      <p>03-12-2024: Netlify 404 Fix</p>
      <p>27-12-2024: Fixing save localstorage</p>
      <p>27-12-2024: Adding edit module</p>
      <p>27-12-2024: End sprints/1 (Shamandy)</p>
      <p>28-12-2024: Adding firebase cloud server</p>
      <p>28-12-2024: Adding variables to firebase </p>
      <p>28-12-2024: End sprints/2 (Elprince)</p>
      <p>15-01-2025: Enhance profile icon</p>
      <p>15-01-2025: Add login page</p>
      <p>12-03-2025: Separated login page</p>
      <p>12-03-2025: Firebase users with thier Ids</p>
      <p>14-03-2025: Adding admin, user Login</p>
      <p>15-03-2025: Firebase create, edit food functions</p>
      <p>16-03-2025: Firebase fix order</p>
      <p>16-03-2025: End sprints/3 (Gaad)</p>
      <p>17-03-2025: Notify hook</p>
      <p>17-03-2025: Auth Utils hook - Logout</p>
      <p>19-03-2025: Oppo Reno F13 4G (Mother's Day)</p>

      <hr />
      <h1 className="flex gap-2 items-center">
        <Icon icon="emojione:turtle" width={40} />
        Next step:
      </h1>

      <h2 className="font-black">
        -✅Study table of (row, column), how to get value of table from row and
        column
      </h2>
      <h2>-gh-pages (Github pages)</h2>
      <h2>-✅Notify</h2>
      <h2>-✅Confirm dialog</h2>
      <h2>-✅useImmer</h2>
      <h2>-✅User can signin and put his preferd sandwiches</h2>
      <h2>-Add Button "Show All Users" and get all users</h2>
      <h2>-Add Search input to serach for specific user</h2>
      <h2>-Search for all users, add them to select, choose the user</h2>
      <h2>-Add debounce 1000ms before search</h2>
      <h2>-</h2>
      <h2>
        -User elly rai7 yeshtery can open table and put all the preferd other
        users sandwiches
      </h2>

      <h2>
        -Add organizations:
        <p className="font-black">=Super-admin and Admins</p>
        <p>* 2 Shikolay</p>
        <p>* 51 Elamir</p>
        <p>* Madinet Nasr</p>
      </h2>

      <hr />

      <div>
        <p>Firebase stop authentication working:</p>
        <p>
          The following Authentication features will stop working when Firebase
          Dynamic Links shuts down on August 25, 2025: email link authentication
          for mobile apps, as well as Cordova OAuth support for web apps. To use
          these features after the shutdown of Dynamic Links, migrate to use an
          alternative solution as described in the Firebase documentation. If
          you take no action, your apps and end users will be able to continue
          using these features until August 25, 2025.
        </p>
      </div>
    </div>
  );
};
