function Customer() {
  var data = [
    {
      id: 1,
      name: "Ranjeet Singh",
      email: "ranjeet@gmail.com",
      address: { permanentAddress: "India", currentAddress: "Hyderabad" },
      skills: [".Net Core", "Azure", "React", "Azure DevOps"],
    },
    {
        id:2,
        name:"Albert",
        email:"albet@gmail.com",
        address:{permanentAddress:"USA",currentAddress:"Sicago"},
        skills:["Angular","AWS","jenkins","Rust"]
    },
    {
        id:3,
        name:"Peter",
        email:"Peter@gmail.com",
        address:{permanentAddress:"UK",currentAddress:"London"},
        skills:["Oracle","AWS","ML","Rust"]
    },
    {
        id:4,
        name:"John",
        email:"john@gmail.com",
        address:{permanentAddress:"UK",currentAddress:"London"},
        skills:["Data Science","AWS","AI","React Native"]
    },
    {
        id:5,
        name:"Scott",
        email:"scott@gmail.com",
        address:{permanentAddress:"Canada",currentAddress:"Toronto"},
        skills:["Python","AWS","Django","ReactJs"]
    }
  ];
  return <div className="container">
   <div>
   <h2 className="text-success text-center">Customer-Details</h2>
    <table className="table table-hover table-bordered table-dark">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Skills</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((customer)=>
                <tr key={customer.id}>
                     <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>
                        <ol>
                            <li>{customer.address.permanentAddress}</li>
                            <li>{customer.address.currentAddress}</li>
                        </ol>
                    </td>
                    <td>{customer.skills.map((skill)=>
                     <div>
                        <input type="checkbox" value={skill} key={skill}/>
                        <span>{skill}</span>
                     </div>
                )}</td>
                </tr>
            )
            }
        </tbody>
    </table>
   </div>
  </div>;
}

export default Customer;
